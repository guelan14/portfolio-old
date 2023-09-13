import React from "react";

export const Contact = () => {
  return (
    <section id="contact">
      <div className="container bg-dark h-100 text-light align-items-center">
        <h2>Contact Me</h2>
        <div className="justify-content-left rounded formGroup ">
          <form id="contactForm ">
            <input
              className="mb-3"
              type="text"
              name="name"
              placeholder="Nombre"
            />
            <input
              className="mb-3"
              type="text"
              name="Telefono"
              placeholder="Telefono"
            />
            <input
              className="mb-3 "
              type="email"
              id="email"
              name="email"
              placeholder="email"
              required
            />
            <textarea
              className="mb-3 "
              id="mensaje"
              cols="30"
              name="mensaje"
              rows="5"
              required
            ></textarea>

            <input
              class="btn bg-dark text-light "
              type="submit"
              value="Enviar"
            />
          </form>
        </div>
      </div>
    </section>
  );
};
