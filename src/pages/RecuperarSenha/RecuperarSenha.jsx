import React from 'react';
import { Link } from 'react-router-dom';

function RecuperarSenha() {
    return (
        <main className='main-login'>
            <form action="#" className="form-login">
                <div className="title">
                    <Link to="/login">
                        <span>Voltar</span>
                    </Link>
                    <h1>Recuperar</h1>
                </div>

                <div className="form__group col-12 email">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form__control" placeholder="Email" required name="email" id="email" />
                </div>

                {/* <div className="form__group col-12 alert erro">Email não encontrado.</div> */}

                <div className="center">
                    <button type="submit" className="form__control">Recuperar</button>
                </div>
            </form>
        </main>
    )
}

export default RecuperarSenha;