import Svg from '~/components/styles/Svg.styles';

const Bold = ({ color }: { color: string }) => (
  <g>
    <path
      d="M17 3H7C4 3 2 4.5 2 8V15C2 18.5 4 20 7 20H10.57C11.16 20 11.64 19.48 11.56 18.89C11.46 18.18 11.48 17.44 11.63 16.68C12.16 14.08 14.3 12.01 16.92 11.58C18.23 11.37 19.48 11.55 20.58 12.03C21.25 12.32 22 11.86 22 11.13V8C22 4.5 20 3 17 3ZM17.47 8.59L14.34 11.09C13.68 11.62 12.84 11.88 12 11.88C11.16 11.88 10.31 11.62 9.66 11.09L6.53 8.59C6.21 8.33 6.16 7.86 6.41 7.53C6.67 7.21 7.14 7.15 7.46 7.41L10.59 9.91C11.35 10.52 12.64 10.52 13.4 9.91L16.53 7.41C16.85 7.15 17.33 7.2 17.58 7.53C17.84 7.86 17.79 8.33 17.47 8.59Z"
      fill={color}
    />
    <path
      d="M18 13C15.24 13 13 15.23 13 18C13 20.76 15.24 23 18 23C20.77 23 23 20.76 23 18C23 15.23 20.77 13 18 13ZM20.05 17.55L19.68 17.91L17.5 20.1C17.4 20.19 17.21 20.29 17.07 20.31L16.09 20.45C15.74 20.5 15.49 20.25 15.54 19.9L15.68 18.92C15.7 18.78 15.79 18.59 15.89 18.49L18.07 16.32L18.43 15.95C18.67 15.71 18.94 15.55 19.22 15.55C19.46 15.55 19.73 15.66 20.03 15.95C20.7 16.6 20.49 17.11 20.05 17.55Z"
      fill={color}
    />
  </g>
);

const Light = ({ color }: { color: string }) => (
  <g>
    <path
      d="M12 21.25H7C3.35 21.25 1.25 19.15 1.25 15.5V8.5C1.25 4.85 3.35 2.75 7 2.75H17C20.65 2.75 22.75 4.85 22.75 8.5V11.5C22.75 11.91 22.41 12.25 22 12.25C21.59 12.25 21.25 11.91 21.25 11.5V8.5C21.25 5.64 19.86 4.25 17 4.25H7C4.14 4.25 2.75 5.64 2.75 8.5V15.5C2.75 18.36 4.14 19.75 7 19.75H12C12.41 19.75 12.75 20.09 12.75 20.5C12.75 20.91 12.41 21.25 12 21.25Z"
      fill={color}
    />
    <path
      d="M11.9988 12.868C11.1588 12.868 10.3088 12.608 9.6588 12.078L6.5288 9.578C6.2088 9.318 6.14881 8.84802 6.4088 8.52802C6.6688 8.20802 7.13879 8.15802 7.45879 8.40802L10.5888 10.908C11.3488 11.518 12.6388 11.518 13.3988 10.908L16.5288 8.40802C16.8488 8.14802 17.3188 8.19802 17.5788 8.52802C17.8388 8.84802 17.7888 9.328 17.4588 9.578L14.3288 12.078C13.6888 12.608 12.8388 12.868 11.9988 12.868Z"
      fill={color}
    />
    <path
      d="M15.8196 21.7816C15.4396 21.7816 15.0796 21.6416 14.8196 21.3816C14.5096 21.0716 14.3696 20.6216 14.4396 20.1516L14.6296 18.8016C14.6796 18.4516 14.8896 18.0316 15.1396 17.7816L18.6796 14.2416C19.1596 13.7616 19.6296 13.5116 20.1396 13.4616C20.7596 13.4016 21.3796 13.6616 21.9596 14.2416C22.5396 14.8216 22.7996 15.4316 22.7396 16.0616C22.6896 16.5616 22.4296 17.0416 21.9596 17.5216L18.4196 21.0616C18.1696 21.3116 17.7496 21.5216 17.3996 21.5716L16.0495 21.7616C15.9695 21.7716 15.8996 21.7816 15.8196 21.7816ZM20.3096 14.9516C20.2996 14.9516 20.2896 14.9516 20.2796 14.9516C20.1396 14.9616 19.9496 15.0916 19.7396 15.3016L16.1996 18.8416C16.1696 18.8716 16.1196 18.9716 16.1196 19.0116L15.9396 20.2616L17.1896 20.0816C17.2296 20.0716 17.3295 20.0216 17.3595 19.9916L20.8996 16.4516C21.1096 16.2316 21.2396 16.0516 21.2496 15.9116C21.2696 15.7116 21.0696 15.4716 20.8996 15.3016C20.7396 15.1416 20.5096 14.9516 20.3096 14.9516Z"
      fill={color}
    />
    <path
      d="M20.9206 18.2509C20.8506 18.2509 20.7806 18.2409 20.7206 18.2209C19.4006 17.8509 18.3506 16.8009 17.9806 15.4809C17.8706 15.0809 18.1006 14.6709 18.5006 14.5509C18.9006 14.4409 19.3106 14.6709 19.4206 15.0709C19.6506 15.8909 20.3006 16.5409 21.1206 16.7709C21.5206 16.8809 21.7506 17.3009 21.6406 17.7009C21.5506 18.0309 21.2506 18.2509 20.9206 18.2509Z"
      fill={color}
    />
  </g>
);

interface IMailEditProps {
  /**
   * The color of the icon
   * @default 'currentColor'
   */
  fill?: string;
  /**
   * The fill of the icon
   * @default false
   * @type boolean
   */
  filled?: boolean;
  /**
   * The size of the icon
   * @default 24
   * @type number
   */
  size?: number;
  /**
   * The height of the icon
   * @default 24
   * @type number
   */
  height?: number;
  /**
   * The width of the icon
   * @default 24
   * @type number
   * */
  width?: number;
}

const MailEdit = ({
  fill = 'currentColor',
  filled = false,
  size = 24,
  height = 24,
  width = 24,
  ...props
}: IMailEditProps) => {
  switch (filled) {
    case false:
      return (
        <Svg
          className=""
          width={width || size}
          height={height || size}
          viewBox="0 0 22 22"
          xmlns="http://www.w3.org/2000/svg"
          css={{
            display: 'inline',
          }}
          {...props}
        >
          <Light color={fill} />
        </Svg>
      );
    default:
      return (
        <Svg
          className=""
          width={width || size}
          height={height || size}
          viewBox="0 0 22 22"
          xmlns="http://www.w3.org/2000/svg"
          css={{
            display: 'inline',
          }}
          {...props}
        >
          <Bold color={fill} />;
        </Svg>
      );
  }
};

MailEdit.displayName = 'MailEditIcon';

export default MailEdit;
