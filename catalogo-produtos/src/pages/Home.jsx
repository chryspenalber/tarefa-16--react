import { useEffect, useState } from "react";
import ProdutoCard from "../components/ProdutoCard";

function Home() {
    const [produtos, setProdutos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setProdutos([
                {
                    id: 1,
                    nome: "Notebook",
                    preco: 3500,
                    descricao: "Notebook para trabalho e estudos",
                },
                {
                    id: 2,
                    nome: "Mouse",
                    preco: 150,
                    descricao: "Mouse sem fio",
                },
            ]);

            setLoading(false);
        }, 2000);
    }, []);

    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState("");
    const [descricao, setDescricao] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        const novoProduto = {
            id: Date.now(),
            nome,
            preco,
            descricao,
        };

        setProdutos([...produtos, novoProduto]);

        setNome("");
        setPreco("");
        setDescricao("");
    }

    <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Nome do produto"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
        />

        <input
            type="number"
            placeholder="Preço"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
            required
        />

        <textarea
            placeholder="Descrição"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            required
        />

        <button type="submit">Cadastrar</button>
    </form>


    if (loading) {
        return <p>Carregando...</p>;
    }

    return (
        <div>
            <h1>Catálogo de Produtos</h1>

            <div className="lista-produtos">
                {produtos.map((produto) => (
                    <ProdutoCard
                        key={produto.id}
                        nome={produto.nome}
                        preco={produto.preco}
                        descricao={produto.descricao}
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;
