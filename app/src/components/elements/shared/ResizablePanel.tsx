/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion, AnimatePresence } from 'framer-motion';

import useMeasure from '~/hooks/useMeasure';

import {
  ScrollArea,
  ScrollAreaViewport,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaCorner,
} from '~/src/components/elements/scroll-area/ScrollArea';

/*
  Replacer function to JSON.stringify that ignores
  circular references and internal React properties.
  https://github.com/facebook/react/issues/8669#issuecomment-531515508
*/
const ignoreCircularReferences = () => {
  const seen = new WeakSet();
  return (key: any, value: any) => {
    if (key.startsWith('_')) return; // Don't compare React's internal props.
    if (typeof value === 'object' && value !== null) {
      if (seen.has(value)) return;
      seen.add(value);
    }
    return value;
  };
};

const ResizablePanel = ({ children }: { children: React.ReactNode }) => {
  const [ref, { height, width }] = useMeasure<HTMLDivElement>();

  return (
    <motion.div
      className="relative overflow-hidden"
      animate={{
        height: height ? (height > 400 ? 400 : height) : 'auto',
        width: width || 'auto',
      }}
      transition={{ duration: 0.25 }}
    >
      <AnimatePresence initial={false}>
        <motion.div // slide and fade effect
          key={JSON.stringify(children, ignoreCircularReferences())}
          initial={{ x: 382, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -382, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className={height ? 'absolute' : 'relative'}
        >
          <ScrollArea
            type="auto"
            css={{
              height: height ? (height > 400 ? 400 : height) : 'auto',
              width: width || 'auto',
            }}
          >
            <ScrollAreaViewport>
              <div ref={ref}>{children}</div>
            </ScrollAreaViewport>
            <ScrollAreaScrollbar orientation="vertical" css={{ width: '10px !important' }}>
              <ScrollAreaThumb />
            </ScrollAreaScrollbar>
            <ScrollAreaCorner />
          </ScrollArea>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default ResizablePanel;
