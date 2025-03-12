'use client';

import React, { useEffect, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button, Group, Progress, rgba, TextInput, useMantineTheme } from '@mantine/core';
import { useInterval } from '@mantine/hooks';
import { PostJobsRequest } from '../../client/client';
import type { PostJobsRequestType } from '../../client/client';
import classes from './MuspForm.module.css';

// ★ Zod のスキーマ(PostJobsRequest)はご質問文に提示された内容を利用

export function MuspForm() {
  const theme = useMantineTheme();
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);

  // 追加: Inputがフォーカス中かどうかを管理
  const [isFocused, setIsFocused] = useState(false);

  // プログレス管理
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
      user_id: '',
      youtube_url: '',
    },
  });

  // 初回マウント時に localStorage から user_id をセット
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedUserId = localStorage.getItem('userID');
      if (storedUserId) {
        setValue('user_id', storedUserId);
        console.log('Stored user_id:', storedUserId);
      }
    }
  }, [setValue]);

  // プログレスが 100% に到達したらページをリロード (サンプル実装)
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

    // プログレス開始
    if (!interval.active) {
      interval.start();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* user_id は画面表示しない例 */}
      <input type="hidden" {...register('user_id')} />

      <TextInput
        placeholder="https://www.youtube.com"
        radius="xl"
        error={errors.youtube_url?.message && !isFocused}
        {...register('youtube_url')}
        // フォーカス時/ブラー時に状態を切り替え
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        styles={{
          input: {
            // エラーメッセージがある かつ フォーカス中でない場合のみ borderColor: red
            borderColor: errors.youtube_url && !isFocused ? 'red' : '#ccc',
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
          type="submit"
          variant="gradient"
          gradient={{ from: 'pink', to: 'violet', deg: 90 }}
          // ボタンクリック → progress > 0 → 処理完了までボタンを無効化
          disabled={progress > 0 && !loaded}
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
