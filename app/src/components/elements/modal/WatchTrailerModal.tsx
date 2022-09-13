import { Modal, Loading } from '@nextui-org/react';
import YouTube, { YouTubeProps } from 'react-youtube';
import { ClientOnly } from 'remix-utils';

import useWindowSize from '~/hooks/useWindowSize';

export type Trailer = {
  iso_639_1?: string;
  iso_3166_1?: string;
  name?: string;
  key?: string;
  site?: string;
  size?: number;
  type?: string;
  official?: boolean;
  published_at?: string;
  id?: string;
};

type WatchTrailerModalProps = {
  trailer: Trailer;
  visible: boolean;
  closeHandler: () => void;
};

const WatchTrailerModal = ({ trailer, visible, closeHandler }: WatchTrailerModalProps) => {
  const { width } = useWindowSize();
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };
  const opts: YouTubeProps['opts'] = {
    height: `${width && width < 720 ? width / 1.5 : 480}`,
    width: `${width && width < 720 ? width : 720}`,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      modestbranding: 1,
      controls: 1,
      mute: 0,
    },
  };

  return (
    <ClientOnly fallback={<Loading type="default" />}>
      {() => (
        <Modal
          closeButton
          blur
          aria-labelledby="modal-title"
          open={visible}
          onClose={closeHandler}
          className="!max-w-fit"
          noPadding
          autoMargin={false}
          width={width && width < 720 ? `${width}px` : '720px'}
        >
          <Modal.Body>
            {trailer && trailer.key && (
              <YouTube videoId={trailer.key} opts={opts} onReady={onPlayerReady} />
            )}
          </Modal.Body>
        </Modal>
      )}
    </ClientOnly>
  );
};

export default WatchTrailerModal;
