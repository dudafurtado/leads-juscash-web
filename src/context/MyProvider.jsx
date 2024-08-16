import { useState } from 'react';
import MyContext from './MyContext';

export default function MyProvider({ children }) {
  const [openModalNewLead, setOpenModalNewLead] = useState(false);
  const [openModalLeadExist, setOpenModalLeadExist] = useState(false);
  const [newAccount, setNewAccount] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });
  const [newLead, setNewLead] = useState({
    name: '',
    email: '',
    phone: '',
    status: '',
    opportunities: {
      all: false,
      succumbedFees: false,
      contractualFees: false,
      dativeFees: false,
      authorCredit: false,
    },
  });
  const [showLead, setShowLead] = useState({
    name: '',
    email: '',
    phone: '',
    status: '',
    opportunities: {
      all: false,
      succumbedFees: false,
      contractualFees: false,
      dativeFees: false,
      authorCredit: false,
    },
  });
  const [leads, setLeads] = useState([]);
  const [potencialClient, setPotencialClient] = useState([]);
  const [confirmedData, setConfirmedData] = useState([]);
  const [leadAnalysis, setLeadAnalysis] = useState([]);

  const values = {
    openModalNewLead,
    setOpenModalNewLead,
    openModalLeadExist,
    setOpenModalLeadExist,
    newAccount,
    setNewAccount,
    login,
    setLogin,
    newLead,
    setNewLead,
    showLead,
    setShowLead,
    leads,
    setLeads,
    potencialClient,
    setPotencialClient,
    confirmedData,
    setConfirmedData,
    leadAnalysis,
    setLeadAnalysis,
  };

  return <MyContext.Provider value={values}>{children}</MyContext.Provider>;
}
