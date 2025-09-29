import { useForm } from "react-hook-form";
import { useState } from "react";
import iconeUsuario from '/icone-usuario.png';

interface FormData {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirm_password: string;
}

export default function ApplicationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<FormData>();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit = async (data: FormData) => {
    if (data.password !== data.confirm_password) {
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
        body: JSON.stringify(data),
      }
    );

    if (res.ok) {
      alert("Conta criada com sucesso!");
      reset();
    } else {
      alert("Erro ao criar conta");
    }
    console.log("Status HTTP:", res.status);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-xl bg-white p-8"
    >
      {/* Cabeçalho */}
      <div className="flex flex-col mb-4">
        <div className="w-14 h-14 rounded-full border flex items-center justify-center shadow-xl text-gray-400">
          <img src={iconeUsuario} alt="icone usuario" />
        </div>
        <h2 className="text-2xl font-bold mt-4">Criar nova conta</h2>
        <p className="text-gray-500 text-left text-sm mt-2">
          Preencha os campos do formulário abaixo para criar uma conta na Ecto
          Tools:
        </p>
      </div>

      {/* Nome */}
      <div className="mb-4">
        <p className="text-sm font-semibold">Nome</p>
        <input
          type="text"
          {...register("name", { required: "O nome é obrigatório" })}
          placeholder="Escreva seu nome"
          className={`w-full p-2 border rounded-lg shadow-sm ${errors.name ? "border-red-500" : "border-gray-400"
            }`}
        />
        {errors.name && (
          <span className="text-red-500 text-xs">{errors.name.message}</span>
        )}
      </div>

      {/* Email */}
      <div className="mb-4">
        <p className="text-sm font-semibold">E-mail</p>
        <input
          type="email"
          {...register("email", {
            required: "O email é obrigatório",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Digite um email válido",
            },
          })}
          placeholder="exemplo@email.com"
          className={`w-full p-2 border rounded-lg shadow-sm ${errors.email ? "border-red-500" : "border-gray-400"
            }`}
        />
        {errors.email && (
          <span className="text-red-500 text-xs">{errors.email.message}</span>
        )}
      </div>

      {/* Telefone */}
      <div className="mb-4">
        <p className="text-sm font-semibold">Telefone</p>
        <input
          type="tel"
          {...register("phone", { required: "O telefone é obrigatório" })}
          placeholder="+55 (00) 00000-0000"
          className={`w-full p-2 border rounded-lg shadow-sm ${errors.phone ? "border-red-500" : "border-gray-400"
            }`}
        />
        {errors.phone && (
          <span className="text-red-500 text-xs">{errors.phone.message}</span>
        )}
      </div>

      {/* Senhas */}
      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        {/* Senha */}
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">Senha</label>
          <div className="flex">
            <input
              type={showPassword ? "text" : "password"}
              {...register("password", { required: "Senha obrigatória" })}
              className="w-full p-2 border border-gray-400 rounded-l-lg shadow-sm"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="px-3 border border-gray-400 rounded-r-lg text-sm font-semibold"
            >
              {showPassword ? "Ocultar" : "Mostrar"}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">
              {errors.password.message as string}
            </p>
          )}
        </div>

        {/* Confirmar Senha */}
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">
            Confirme sua senha
          </label>
          <div className="flex">
            <input
              type={showConfirmPassword ? "text" : "password"}
              {...register("confirm_password", {
                required: "Confirmação obrigatória",
                validate: (value) =>
                  value === watch("password") || "As senhas não coincidem",
              })}
              className="w-full p-2 border border-gray-400 rounded-l-lg shadow-sm"
            />
            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
              className="px-3 border border-gray-400 rounded-r-lg text-sm font-semibold"
            >
              {showConfirmPassword ? "Ocultar" : "Mostrar"}
            </button>
          </div>
          {errors.confirm_password && (
            <p className="text-red-500 text-xs mt-1">
              {errors.confirm_password.message as string}
            </p>
          )}
        </div>
      </div>

      {/* Botão */}
      <button
        type="submit"
        className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
      >
        Cadastrar conta
      </button>
    </form>
  );
}
