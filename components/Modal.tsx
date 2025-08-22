interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="rounded-lg bg-white p-6 shadow-lg">
        {children}
        <button onClick={onClose} className="mt-4 rounded bg-blue-500 px-4 py-2 text-white">
          Close
        </button>
      </div>
    </div>
  );
};
