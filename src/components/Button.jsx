export default function Button({ children, className }) {
  return (
    <button
      className={
        className
          ? className
          : "m-2 p-1   flex items-center bg-white border border-gray-200 hover:bg-gray-200 rounded"
      }
    >
      {children}
    </button>
  );
}
