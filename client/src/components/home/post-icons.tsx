import SvgColor from "../svg-color";
import {} from '../../assets/icons/post/Option.svg'


const icon = (name: string, height = 1, width = 1) => (
    <SvgColor src={`../../assets/icons/post/Option.svg`} sx={{ height, width }} />
  );

export const POST_ICONS = {
    option: icon('Option')
}