import { helper } from '@ember/component/helper';

export function interest(params) {
  let ir = params[0]
  let sb = params[1]
  let ts = params[2]
  let od = params[4]
  let overdraft = Math.abs(sb - ts);

  if(overdraft <= od){
      return 0;
  }
  let interest = ir * overdraft;

  return interest;
};

export default helper(interest);