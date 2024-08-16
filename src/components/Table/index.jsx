import './styles.css';
import useMyContext from '../../context/useMyContext';
import ArrowLeftIcon from '../../assets/arrow-left.png';
import { useEffect } from 'react';

export default function Table() {
  const {
    leads,
    setLeads,
    openModalLeadExist,
    setOpenModalLeadExist,
    setShowLead,
    potencialClient,
    setPotencialClient,
    confirmedData,
    setConfirmedData,
    leadAnalysis,
    setLeadAnalysis,
  } = useMyContext();

  useEffect(() => {
    manipulateLists();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [leads]);

  function showLead(id) {
    setOpenModalLeadExist(!openModalLeadExist);

    const leadSearch = leads.find((lead) => lead.id === id);

    setShowLead(leadSearch);
  }

  function handleLeadChangeList(id) {
    setLeads((prevLeads) =>
      prevLeads.map((lead) => {
        if (lead.id === id) {
          if (lead.status === 'potencial-client') {
            return { ...lead, status: 'confirmed-data' };
          }
          if (lead.status === 'confirmed-data') {
            return { ...lead, status: 'lead-analysis' };
          }
        }
        return lead;
      })
    );
  }

  function manipulateLists() {
    setPotencialClient(leads.filter((lead) => lead.status === 'potencial-client'));
    setConfirmedData(leads.filter((lead) => lead.status === 'confirmed-data'));
    setLeadAnalysis(leads.filter((lead) => lead.status === 'lead-analysis'));
  }

  return (
    <main className="table">
      <section>
        <h1>Cliente Potencial</h1>
        <ul>
          {potencialClient.map((client) => (
            <div key={client.id}>
              <li onClick={() => showLead(client.id)}>{client.name}</li>
              <img
                src={ArrowLeftIcon}
                alt="Seta para o lado esquerdo indicando mudança do nome de lugar"
                className="arrow-left-icon"
                onClick={() => handleLeadChangeList(client.id)}
              />
            </div>
          ))}
        </ul>
      </section>
      <section>
        <h1>Dados Confirmados</h1>
        <ul>
          {confirmedData.map((data) => (
            <div key={data.id}>
              <li onClick={() => showLead(data.id)}>{data.name}</li>
              <img
                src={ArrowLeftIcon}
                alt="Seta para o lado esquerdo indicando mudança do nome de lugar"
                className="arrow-left-icon"
                onClick={() => handleLeadChangeList(data.id)}
              />
            </div>
          ))}
        </ul>
      </section>
      <section>
        <h1>Analise do Lead</h1>
        <ul>
          {leadAnalysis.map((lead) => (
            <div key={lead.id}>
              <li onClick={() => showLead(lead.id)}>{lead.name}</li>
              <img
                src={ArrowLeftIcon}
                alt="Seta para o lado esquerdo indicando mudança do nome de lugar"
                className="arrow-left-icon"
                onClick={() => handleLeadChangeList(lead.id)}
              />
            </div>
          ))}
        </ul>
      </section>
    </main>
  );
}
