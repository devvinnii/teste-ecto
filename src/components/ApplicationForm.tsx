import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirm_password: string;
}

export default function ApplicationForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirm_password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirm_password) {
      alert("As senhas não coincidem!");
      return;
    }

    const res = await fetch(
      "https://flow.ecto.tools/webhook/79e12507-621e-4880-bb5a-9fd8c15a4b61",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "9fMD5VvEzQShteBFutyWw33f",
        },
        body: JSON.stringify(formData),
      }
    );

    if (res.ok) {
      alert("Conta criada com sucesso!");
    } else {
      alert("Erro ao criar conta");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md bg-white p-8 border-gray-200 "
    >
      <div className="flex flex-col items-center mb-6">
        <div className="w-14 h-14 rounded-full border flex items-center justify-center text-gray-400">
          👤
        </div>
        <h2 className="text-2xl font-bold mt-4">Criar nova conta</h2>
        <p className="text-gray-500 text-sm text-center mt-2">
          Preencha os campos do formulário abaixo para criar uma conta na Ecto
          Tools:
        </p>
      </div>

      <div className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Escreva seu nome"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="exemplo@email.com"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="+55 (00) 00000-0000"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          required
        />
        <div className="grid grid-cols-2 gap-4">
          <input
            type="password"
            name="password"
            placeholder="Senha"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            name="confirm_password"
            placeholder="Confirme sua senha"
            value={formData.confirm_password}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
      >
        Cadastrar conta
      </button>
    </form>
  );
}
