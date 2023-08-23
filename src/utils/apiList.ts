import { type dataType } from '@/data';

export type methodType = 'POST' | 'GET' | 'DELETE';
export interface urlProps {
  url: string;
  method: methodType;
}

/** https://www.apifox.cn/web/project/2462266 */
const data: dataType<urlProps> = {
  demo: {
    url: 'https://defiprime.com/defiprime.tokenlist.json',
    method: 'GET',
  },
};
export default data;
