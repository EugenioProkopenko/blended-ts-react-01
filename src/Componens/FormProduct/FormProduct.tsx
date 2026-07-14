import { useId } from 'react';
import styles from './FormProduct.module.css';

interface FormProductProps {
  onSubmit: (velue: string) => void;
}

export default function FormProduct({ onSubmit }: FormProductProps) {
  const fieldId = useId();

  const handleSubmit = (formData: FormData) => {
    const productName = formData.get('productName') as string;

    // const productPrice = formData.get('productPrice') as number;

    onSubmit(productName);
  };
  return (
    <form action={handleSubmit}>
      <label htmlFor={`${fieldId}-productName`}>Назва товару</label>

      <input
        id={`${fieldId}-productName`}
        className={styles.input}
        type="text"
        name="productName"
        placeholder="Введіть назву товару"
      />

      <label htmlFor={`${fieldId}-productPrice`}>Price</label>
      <input
        id={`${fieldId}-productPrice`}
        className={styles.input}
        type="text"
        name="productPrice"
        placeholder="Введіть ціну"
      />
      <button className={styles.button} type="submit">
        Надіслати
      </button>
    </form>
  );
}
