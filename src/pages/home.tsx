import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, MapPin, MessageCircle, ShieldCheck, Sparkles, Star } from "lucide-react";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { Button } from "@/components/ui/button";
import { services, testimonials, business, researchTools } from "@/lib/business-data";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.62, ease: "easeOut" } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

export default function Home() {
  return (
    <div className="page">
      <header className="header">
        <div className="nav">
          <a className="brand" href="#top">
            <span className="brandMark"><Sparkles size={22} /></span>
            <span>
              <strong>{business.company}</strong>
              <small>{business.brandLabel}</small>
            </span>
          </a>
          <a className="headerCta" href={business.whatsapp} target="_blank" rel="noopener noreferrer">
            {business.primaryCta}
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="heroGlow heroGlowA" />
          <div className="heroGlow heroGlowB" />
          <motion.div className="ratingBadge" initial="hidden" animate="visible" variants={fadeUp}>
            <span className="stars">★★★★★</span>
            <span>{business.badge}</span>
          </motion.div>
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp}>
            {business.headline} <em>{business.italic}</em>
          </motion.h1>
          <motion.p className="lead" initial="hidden" animate="visible" variants={fadeUp}>
            {business.lead}
          </motion.p>
          <motion.div className="heroActions" initial="hidden" animate="visible" variants={fadeUp}>
            <Button asChild className="whatsappButton">
              <a href={business.whatsapp} target="_blank" rel="noopener noreferrer">
                {business.primaryCta}
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="#servicos">{business.secondaryCta}</a>
            </Button>
          </motion.div>
        </section>

        <section className="quickBar">
          <div>
            <strong>Resposta rápida pelo WhatsApp</strong>
            <span>Contato, endereço e próxima ação em uma experiência só.</span>
          </div>
          <a href={business.whatsapp} target="_blank" rel="noopener noreferrer">
            Falar agora <ArrowRight size={18} />
          </a>
        </section>

        <section id="servicos" className="section">
          <div className="sectionHead">
            <span>Serviços</span>
            <h2>{business.sectionTitle}</h2>
            <p>Copy, estrutura e visual pensados para parecerem feitos especificamente para {business.company}, sem texto genérico de template.</p>
          </div>
          <motion.div className="serviceGrid" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-90px" }}>
            {services.map((service) => (
              <motion.article className="serviceCard" key={service.title} variants={fadeUp}>
                <div className="iconBox"><ShieldCheck size={24} /></div>
                <h3>{service.title}</h3>
                <p>{service.detail}</p>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <section className="split">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="label">Diferenciais</span>
            <h2>{business.differentialsTitle}</h2>
            <p>{business.proofText}</p>
            {["Atendimento direto pelo WhatsApp", "Visual responsivo e moderno", "Localização e prova social acima da dobra", "Estrutura fácil de editar e publicar"].map((item) => (
              <div className="check" key={item}><CheckCircle2 size={20} /><span>{item}</span></div>
            ))}
          </motion.div>
          <motion.aside className="proofCard" initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <Star className="proofStar" />
            <h3>{business.proofTitle}</h3>
            <p>{business.proofText}</p>
            <div className="scoreGrid">
              <div><strong>{business.rating || "5.0"}</strong><span>nota Google</span></div>
              <div><strong>{business.reviews || "0"}</strong><span>avaliações</span></div>
            </div>
          </motion.aside>
        </section>

        <section className="section reviews">
          <div className="sectionHead">
            <span>Prova social</span>
            <h2>Confiança sem inventar depoimentos</h2>
            <p>O Nexus usa avaliações e reputação informadas no briefing, sem criar fatos falsos.</p>
          </div>
          <div className="reviewGrid">
            {testimonials.map((text, index) => (
              <article className="reviewCard" key={text}>
                <div className="stars">★★★★★</div>
                <p>{text}</p>
                <strong>Cliente {index + 1}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="locationFaq">
          <div className="locationCard">
            <span className="label">Localização</span>
            <h2>{business.company}</h2>
            <p><MapPin size={18} /> {business.address}</p>
            <p><Clock size={18} /> Atendimento com contato prévio pelo WhatsApp</p>
            <div className="mapFrame">
              <iframe src={business.mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title={"Mapa " + business.company} />
            </div>
            <div className="inlineActions">
              <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer">Como chegar</a>
              <a href={business.whatsapp} target="_blank" rel="noopener noreferrer">Agendar</a>
            </div>
          </div>

          <div className="faqCard">
            <span className="label">FAQ</span>
            <h2>Dúvidas frequentes</h2>
            {business.faq.map((item) => (
              <details key={item.q} open={item.open}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="researchPanel">
          <span className="label">Pesquisa preparada</span>
          <h2>Ferramentas usadas antes da construção</h2>
          <div className="toolGrid">
            {researchTools.map((tool) => (
              <a key={tool.name} href={tool.url} target="_blank" rel="noopener noreferrer">
                <strong>{tool.name}</strong>
                <span>{tool.purpose}</span>
              </a>
            ))}
          </div>
        </section>

        <section className="finalCta">
          <h2>{business.finalTitle}</h2>
          <p>O próximo passo está a um toque. A página foi construída para gerar contato real, não apenas ficar bonita.</p>
          <a href={business.whatsapp} target="_blank" rel="noopener noreferrer">
            <MessageCircle size={22} /> {business.primaryCta}
          </a>
        </section>
      </main>

      <footer className="footer">
        <strong>{business.company}</strong>
        <span>{business.location} · Página criada pelo Agent Nexus</span>
      </footer>
      <FloatingWhatsApp />
    </div>
  );
}
