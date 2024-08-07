import React, {createContext, useContext, useState} from 'react';

// 定义通信上下文
interface CommunicationContextType {
  message: string;
  sendMessage: (message: string) => void;
}

// 创建通信上下文
const CommunicationContext = createContext<CommunicationContextType | undefined>(undefined);

// 自定义 hook，用于提供通信功能
const useCommunication = () => {
  const context = useContext(CommunicationContext);
  if (!context) {
    throw new Error('useCommunication must be used within a CommunicationProvider');
  }
  return context;
};

export default useCommunication

// 提供器组件，包裹应用并提供通信上下文
export const CommunicationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [message, setMessage] = useState<string>('');

  const sendMessage = (message: string) => {
    setMessage(message);
  };

  return <CommunicationContext.Provider value={{ message, sendMessage }}>
    {children}
  </CommunicationContext.Provider>
};
