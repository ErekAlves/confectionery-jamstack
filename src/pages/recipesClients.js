import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import Layout from '../components/layout';
import '../components/recipesForm.css';

const RecipeForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  };

  const onSubmit = (dados) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'form_react_form', dados }),
    })
      .then(() => {
        alert(
          'Sua receita agora faz parte do maior acervo de receitas online do Brasil'
        );
        reset();
      })
      .catch((error) => alert(error));
  };

  const handleClearForm = () => {
    reset();
  };

  return (
    <Layout>
      <div className="centered-form">
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div>
            <label htmlFor='nome'>Nome:</label>
            <Controller
              name='nome'
              control={control}
              rules={{ required: 'O campo Nome é obrigatório' }}
              render={({ field }) => <input id='nome' {...field} />}
            />
            {errors.nome && <p>{errors.nome.message}</p>}
          </div>

          <div>
            <label htmlFor='email'>Email:</label>
            <Controller
              name='email'
              control={control}
              rules={{
                required: 'O campo Email é obrigatório',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'Email inválido',
                },
              }}
              render={({ field }) => (
                <input id='email' type='email' {...field} />
              )}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor='nomeReceita'>Nome da Receita:</label>
            <Controller
              name='nomeReceita'
              control={control}
              rules={{ required: 'O campo Nome da Receita é obrigatório' }}
              render={({ field }) => <input id='nomeReceita' {...field} />}
            />
            {errors.nomeReceita && <p>{errors.nomeReceita.message}</p>}
          </div>

          <div>
            <label htmlFor='tipoReceita'>Tipo de Receita:</label>
            <Controller
              name='tipoReceita'
              control={control}
              rules={{ required: 'Selecione o tipo de receita' }}
              render={({ field }) => (
                <select id='tipoReceita' {...field}>
                  <option value=''>Selecione...</option>
                  <option value='doce'>Doce</option>
                  <option value='salgada'>Salgada</option>
                </select>
              )}
            />
            {errors.tipoReceita && <p>{errors.tipoReceita.message}</p>}
          </div>

          <div>
            <label htmlFor='conteudoReceita'>Cole aqui sua receita:</label>
            <Controller
              name='conteudoReceita'
              control={control}
              rules={{ required: 'O campo Receita é obrigatório' }}
              render={({ field }) => (
                <textarea id='conteudoReceita' {...field} />
              )}
            />
            {errors.conteudoReceita && <p>{errors.conteudoReceita.message}</p>}
          </div>

          <button type='submit' disabled={Object.keys(errors).length !== 0}>
            Enviar
          </button>

          <button type='button' onClick={handleClearForm}>
            Limpar
          </button>
        </form>
        </div>
    </Layout>
  );
};

export default RecipeForm;

export const Head = () => <title>Receitas enviadas pelos leitores</title>;
