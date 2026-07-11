interface OrderFromProps {
  onSubmit: (value: string) => void;
}

export default function OrderForm({ onSubmit }: OrderFromProps) {
  const handleSubmit = (formData: FormData) => {
    const username = formData.get('username') as string;
    if (username === '') {
      alert('Please enter search name!');
      return;
    }
    onSubmit(username);
  };
  return (
    <form action={handleSubmit}>
      <input type="text" name="username" />
      <button type="submit">Submit Plase order</button>
    </form>
  );
}
