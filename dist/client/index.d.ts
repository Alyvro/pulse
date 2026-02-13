type ConnectionStatus = "CONNECTING" | "CONNECTED" | "DISCONNECTED";
declare const usePulse: <T>(channel: string, endpoint?: string) => {
    data: T | null;
    status: ConnectionStatus;
};

export { type ConnectionStatus, usePulse };
