import type { ProductArticle } from './productArticle';

interface ProductListCompProps {
  items: ProductArticle[];
}

export default function ProductListComp({ items }: ProductListCompProps) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <h3>Назва товару: {item.name}</h3>
          <p>Код товару: {item.id}</p>
          <p>Ціна товру {item.price}</p>
        </li>
      ))}
    </ul>
  );
}
