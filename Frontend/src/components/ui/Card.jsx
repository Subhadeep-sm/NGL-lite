export function Card({ className = '', children }) {
  return (
    <div className={`bg-white dark:bg-gray-800 shadow-md rounded-xl ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ className = '', children }) {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
}
