'use client';

import React, { useEffect, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button, Group, Progress, rgba, TextInput, useMantineTheme } from '@mantine/core';
import { useInterval } from '@mantine/hooks';
import { PostJobsRequest } from '../../client/client';
import type { PostJobsRequestType } from '../../client/client';
import classes from './MuspForm.module.css';


// ★ Zod のスキーマ(PostJobsRequest)は質問文で提示された内容を使用

export function MuspForm() {
  const theme = useMantineTheme();
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const interval = useInterval(
    () =>
      setProgress((current) => {
        if (current < 100) {
          return current + 1;
        }

        interval.stop();
        setLoaded(true);
        return 0;
      }),
    20
  );

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<PostJobsRequestType>({
    resolver: zodResolver(PostJobsRequest),
    defaultValues: {
      user_id: '', // 後から localStorage の値をセットする
      youtube_url: '',
    },
  });

  // マウント時に localStorage の user_id をセット
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedUserId = localStorage.getItem('user_id');
      if (storedUserId) {
        setValue('user_id', storedUserId);
      }
    }
  }, [setValue]);

  // 進捗バーが 100% に到達したらリロード
  useEffect(() => {
    if (loaded) {
      console.log('Process finished!');
      window.location.reload();
    }
  }, [loaded]);

  // フォーム送信時のハンドラ
  const onSubmit = async (data: PostJobsRequestType) => {
    // ここでバックエンドへのリクエストなどを行う
    console.log('送信データ:', data);

    // ボタンクリックの処理（プログレス開始）
    if (!interval.active) {
      interval.start();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* user_id を画面に表示しない場合は hidden input にする */}
      <input type="hidden" {...register('user_id')} />

      <TextInput
        label="YouTube URL"
        placeholder="https://www.youtube.com"
        radius="xl"
        // Mantine のエラー表示には {errors.youtube_url?.message} を利用
        error={errors.youtube_url?.message}
        {...register('youtube_url')}
        styles={{
          input: {
            borderColor: errors.youtube_url ? 'red' : '#ccc',
          },
          label: {
            fontWeight: 500,
            marginBottom: '0.5rem',
          },
        }}
        className={classes.input}
      />

      <Group justify="center" mt="xl" mb={50}>
        <Button
          className={classes.button}
          type="submit" // フォーム送信用
          variant="gradient"
          gradient={{ from: 'pink', to: 'violet', deg: 90 }}
        >
          <div className={classes.label}>
            {progress !== 0 ? 'Processing...' : loaded ? 'Process Finished!' : 'Add Music!'}
          </div>
          {progress !== 0 && (
            <Progress
              value={progress}
              className={classes.progress}
              color={rgba(theme.colors.blue[2], 0.35)}
              radius="sm"
            />
          )}
        </Button>
      </Group>
    </form>
  );
}
