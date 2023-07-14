'use client'

import className from 'classnames';

type IButtonProps = {
  xl?: boolean;
  children: string;
};

const Button = (props: IButtonProps) => {
  const btnClass = className({
    btn: true,
    'btn-xl': props.xl,
    'btn-base': !props.xl,
    'btn-primary': true,
  });

  return (
    <div className={btnClass + " " + "inline-block rounded-md text-center"}>
      {props.children}

      <style jsx>
        {`
          .btn {
            color: var(--white, #FFF);
            text-align: center;
            font-size: 14px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            text-transform: capitalize;
            display: flex;
            width: 102px;
            height: 25.714px;
            flex-direction: column;
            justify-content: center;
            flex-shrink: 0;
          }

          .btn-base {
            @apply text-lg font-semibold py-2 px-4;
          }

          .btn-xl {
            @apply font-extrabold text-xl py-4 px-6;
          }

          .btn-primary {
            @apply text-white bg-primary-500;
          }

          .btn-primary:hover {
            @apply bg-primary-600;
          }
        `}
      </style>
    </div>
  );
};

export { Button };
