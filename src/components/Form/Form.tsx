import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from 'store/hooks';

import { Button } from '../Button/Button';
import { createShortLink } from 'store/linkSlice';

import classes from './Form.module.scss';

type FormValues = { url: string };

export const Form = () => {
  const { status } = useAppSelector((state) => state.links);
  const dispatch = useAppDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormValues>({
    mode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    dispatch(createShortLink(data.url));
    reset();
  };

  return (
    <section className={classes.section}>
      <div className='container'>
        <form
          className={classes.form}
          autoComplete='off'
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type='url'
            placeholder='Shorten a link here...'
            className={classes.input}
            disabled={status === 'pending'}
            style={{
              outline: !errors.url ? 'none' : undefined,
              outlineColor: errors.url && 'var(--secondary-300)',
            }}
            {...register('url', {
              required: 'Please add a link',
              pattern: {
                value: /^(http|https):\/\/[^ "]+$/,
                message: 'Please enter a valid url',
              },
            })}
          />
          <Button
            variant='square'
            type='submit'
            size='medium'
            disabled={status === 'pending'}
          >
            Shorten it!
          </Button>
          {errors.url && (
            <div className={classes.error}>{errors.url.message as string}</div>
          )}
        </form>
      </div>
    </section>
  );
};
