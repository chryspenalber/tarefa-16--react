function ProdutoCard({ nome, preco, descricao, imagem }) {
  return (
    <div className="produto-card">
      {imagem && <img src={imagem} alt={nome} />}
      <h3>{nome}</h3>
      <p>{descricao}</p>
      <span>R$ {preco}</span>
    </div>
  );
}

export default ProdutoCard;
