import { useEffect, useRef, MutableRefObject } from 'react';

import { useAuth } from '@/context/AuthContext';

import ws, { fakeConnection } from '../services/websocket';

export function useWebSocket(
  room?: string,
  onConnect?: (socket: SocketIOClient.Socket) => void,
): MutableRefObject<SocketIOClient.Socket> {
  const socketRef = useRef<SocketIOClient.Socket>(fakeConnection());
  const lastRoomRef = useRef<string>(null);

  const { user } = useAuth();

  useEffect(() => {
    const disconnect = () => {
      socketRef.current.disconnect();
    };

    if (!user) {
      return disconnect;
    }

    const newSocket = ws({
      user_id: user.id,
    });

    if (lastRoomRef.current) {
      newSocket.io.emit('leave', lastRoomRef.current);
    }

    newSocket.emit('join', room);

    if (onConnect) {
      onConnect(newSocket);
    }

    console.log(
      `Successfully connected to websocket, joined to channel: '${room}'.`,
    );

    socketRef.current = newSocket;
    lastRoomRef.current = room;

    return disconnect;
  }, [onConnect, room, user]);

  return socketRef;
}
