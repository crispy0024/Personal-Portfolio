import Markdown from 'markdown-to-jsx';

const themeClassMap = {
  outline: 'bg-white border border-gray-300 text-gray-800',
  primary: 'bg-purple-700 text-white',
  dark: 'bg-gray-800 text-white',
};

export const Stats = (props) => {
  return (
    <div
      className={`px-6 py-16 text-center rounded-md ${themeClassMap[props.theme] ?? themeClassMap['outline']} sm:px-12 sm:py-24`}
      data-sb-object-id={props.id}
    >
      <div className="mx-auto">
        <div className="mb-16">
          <h2 className="mb-4 text-4xl font-bold sm:text-5xl text-gray-800" data-sb-field-path="heading">
            {props.heading}
          </h2>
          {props.body && <Markdown options={{ forceBlock: true }} className="sm:text-lg text-gray-600" data-sb-field-path="body">
            {props.body}
          </Markdown>}
        </div>
        <div className="grid max-w-3xl gap-12 mx-auto sm:grid-cols-3">
          {(props.stats || []).map((stat, idx) => <StatItem key={idx} {...stat} />)}
        </div>
      </div>
    </div>
  );
};

const StatItem = (props) => {
  return (
    <div data-sb-object-id={props.id}>
      <div className="mb-3 text-4xl font-bold sm:text-5xl text-gray-800" data-sb-field-path="value">
        {props.value}
      </div>
      <div className="text-gray-600" data-sb-field-path="label">{props.label}</div>
    </div>
  );
};
