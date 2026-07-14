import { useId } from 'react';
import styles from './FormProduct.module.css';

interface FormProductProps {
  onSubmit: (value: OrderData) => void;
}

export interface OrderData {
  productName: string;
  productPrice: number;
}

export default function FormProduct({ onSubmit }: FormProductProps) {
  const fieldId = useId();

  const handleSubmit = (formData: FormData) => {
    const orderData: OrderData = {
      productName: formData.get('productName') as string,
      productPrice: Number(formData.get('productPrice')),
    };

    // const productPrice = formData.get('productPrice') as number;

    onSubmit(orderData);
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
