import Link from 'next/link';

const themeClassMap = {
  default: 'border-gray-900 bg-gray-900 text-white hover:bg-gray-700 hover:border-gray-700',
  outline: 'border-gray-900 bg-transparent text-gray-900 hover:bg-gray-900 hover:text-white hover:border-gray-900',
};

export const Button = (props) => {
  return (
    <Link
      href={props.url}
      className={`py-3 px-6 inline-block border-2 font-semibold rounded-md transition-all duration-300 ${
        themeClassMap[props.theme] ?? themeClassMap['default']
      }`}
      data-sb-object-id={props.id}
    >
      <span data-sb-field-path="label">{props.label}</span>
    </Link>
  );
};
