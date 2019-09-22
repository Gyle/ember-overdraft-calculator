import Route from '@ember/routing/route';

export default Route.extend({
    model(params){
        // Resource: https://stackoverflow.com/questions/46260144/javascript-how-to-get-current-time-and-date-of-specific-country-eg-new-zeala 
        // create Date object for current location
        var date = new Date();
        // convert to milliseconds, add local time zone offset and get UTC time in milliseconds
        var utcTime = date.getTime() + (date.getTimezoneOffset() * 60000);
        // time offset for New Zealand is +12
        var timeOffset = 12;
        // create new Date object for a different timezone using supplied its GMT offset.
        var NewZealandTime = new Date(utcTime + (3600000 * timeOffset));

        let accounts = [{
            account: '12-000-00000000-50',
            accountHolder: 'MISS L (IU) Ji-eun',
            accountType: 'Jumpstart Account',
            startMonthBalance: 345.00,
            totalMonthSpending: 1200.00,
            creditLimit: 100.00,
            interestRate: 0.10,
            transactions: {
                date: '2 Sep 2019',
                description: 'Living costs',
                cheque: 'XX.XX',
                deposit: '-',
                balance: 'XX.XX'
            },
            dateTime: NewZealandTime
                    
        }, {
    
            account: '12-000-00000000-51',
            accountHolder: 'MISS L (IU) Ji-eun',
            accountType: 'Online Account',
            startMonthBalance: 1200.00,
            totalMonthSpending: 100.00,
            creditLimit: 20.00,
            interestRate: 0.15,
            transactions: {
                date: '5 Sep 2019',
                description: 'Japan trip',
                cheque: '-',
                deposit: 'XX.XX',
                balance: 'XX.XX'
            },
            dateTime: NewZealandTime
       
        }, {
    
            account: '12-000-00000000-52',
            accountHolder: 'MISS L (IU) Ji-eun',
            accountType: 'Serious Saver Account',
            startMonthBalance: 11000.00,
            totalMonthSpending: 0.00,
            creditLimit: 0.00,
            interestRate: 0.30,
            transactions: {
                date: '2 Sep 2019',
                description: 'Emergency money',
                cheque: '-',
                deposit: 'XX.XX',
                balance: 'XX.XX'
            },
            dateTime: NewZealandTime
    
        }];

        // return nothing if not in range
        if ( !(params.statement_id >= 0 &&  params.statement_id < accounts.length) ){
            console.log("go to oh no")
            this.transitionTo('oh-no');
            return undefined
        }
    
        if(params.statement_id !== ''){
            return accounts[params.statement_id];
        }
        
        return accounts;
    
    
        // return this.store.findRecord('statement', params.statement_id);
    }
    
});
