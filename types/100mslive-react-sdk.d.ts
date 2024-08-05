declare module '@100mslive/react-sdk' {
    import { MutableRefObject } from 'react';
  
    // useAVToggle hook
    export function useAVToggle(): {
      isLocalAudioEnabled: boolean;
      isLocalVideoEnabled: boolean;
      toggleAudio: () => void;
      toggleVideo: () => void;
    };
  
    // useHMSActions hook
    export function useHMSActions(): {
      join: (config: { authToken: string; userName: string }) => void;
      leave: () => void;
      setScreenShareEnabled: (enabled: boolean) => Promise<void>;
    };
  
    // useHMSStore hook
    export function useHMSStore<T>(selector: (state: any) => T): T;
  
    // selectPeers selector
    export const selectPeers: (state: any) => HMSPeer[];
  
    // HMSPeer interface
    export interface HMSPeer {
      id: string;
      name: string;
      isLocal: boolean;
      videoTrack: string;
      // Add other properties as needed
    }
  
    // useVideo hook
    export function useVideo(config: { trackId: string }): {
      videoRef: MutableRefObject<HTMLVideoElement | null>;
    };
  
    // Add any other types, functions, or interfaces you might need
  }