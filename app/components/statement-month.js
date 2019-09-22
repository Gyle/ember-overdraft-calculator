import Component from '@ember/component';

export default Component.extend({
    tagName:'tr',

    // Calculates the interest charged for when the account has gone over their credit limit. Returns 0 otherwise
    // ir = interest rate
    // sb = starting balance
    // ts = total spending
    // od = overdraft limit (credit limit)
    CalculateInterest(ir,sb,ts,od){
        let overdraft = Math.abs(sb - ts);
        if(overdraft <= od){
            return 0;
        }

        let interest = ir * overdraft;

        return interest;
    }
});
