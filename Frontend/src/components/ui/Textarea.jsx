export function Textarea(props) {
  return (
    <textarea
      className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-indigo-400"
      {...props}
    />
  );
}
