import { helper } from '@ember/component/helper';

// Calculates the interest charged for when the account has gone over their credit limit. Returns 0 otherwise
// ir = interest rate
// sb = starting balance
// ts = total spending
// od = overdraft limit (credit limit)
export function interest(params) {
  let ir = params[0];
  let sb = params[1];
  let ts = params[2];
  let od = params[3];

  if(ts <= sb){
    return 0;
  }

  let overdraft = Math.abs(sb - ts);

  if(overdraft <= od){
    return 0;
  }
  let interest = ir * overdraft;

  return interest;
}

export default helper(interest);