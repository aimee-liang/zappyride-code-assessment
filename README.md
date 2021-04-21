### Overview
We are seeking to calculate electric bills – how much the electric company charges consumers of
electricity. This is crucial for EVs, as people need to understand how much charging their EV costs.
At the most general level, an electric bill is a function of three inputs:
• Load Profile –how much electricity is used over the time period considered
• Electric Rate – the rate plan (also known as rate schedule) that the electric utility customer is on
• The time period considered. Usually, bills are calculated on a monthly basis.

### Load Profile
The instant amount of electricity used at a given point of time is measured in kilowatts (kW). The
amount of electricity used over a period of time is measured in kilowatt-hours (kWh). Mathematically
speaking, kW’s are the derivative of kWh’s over time.
The Load Profile is the sequence of electricity usage over time. For our purposes, it is usually sampled
every hour.
For instance, the Load Profile of a given home for a year would be comprised of (365 days/year) * (24
hours per day) = 8,760 values. In this case, the load profile can be presented with LP(t) with t=1,
2, … ,8760.

### Electric Rates
Rates specify how the load profile is processed into a dollar amount for the electric bill.
Rates come in multiple shapes and structures. We’ll explore a couple of examples here.
• A flat rate is a set $/kWh value applied to the load profile.
o For instance, if the rate is a flat $0.10/kWh and the home uses 5 kWh every hour, the
total bill for the year will be $0.10 * 5 * 8760 = $4,380 .
• A block rate amounts to layering flat rates on top of each other, based on energy usage for a
month.
o For instance, a block rate could be:
▪ $0.10/kWh for the first 1,000 kWh of the month
▪ $0.15/kWh for every kWh above 1,000 that month
▪ If the home uses 1,200 kWh for a given month, the bill is $0.10*1,000 + $0.15 *
200 = $30
• A rate can also include demand charges which depend on the peak amount of electricity used in
a given month
o For instance, a rate with demand charges could be:
▪ $0.10/kWh (energy charge)
▪ $10/kW (demand charge) – applied to the peak usage that month
▪ If the home uses 1,000 kWh per month, and their max usage is 50 kW (say,
when all the appliances are on at the same time), the bill will be: $0.10*1,000 +
$10*50 = $600 .
• A time-of-use (TOU) rate features energy charges that vary depending on when the energy is
used
o For instance, a TOU rate with no demand charge could be:
▪ $0.10/kWh for electric consumption between 9pm and 5am (night time)
▪ $0.15/kWh for electric consumption between 5am and 9am (day time)
▪ If a home uses:
• 5 kWh between midnight and 5am
• 20 kWh between 5am and 9pm
• 4 kWh between 9pm and midnight
• Then the bill for that day will be $0.10 * 5 + $0.15 *20 + $0.10 *4 = $3.90 .
### Application to EVs
Generally speaking, when a homeowner purchases an EV, they will charge it in their garage.
To calculate the impact of the EV on the electric bill, we can use the following steps:
• Obtain the home load profile, that includes every non-EV load (e.g. refrigerator, lightbulbs, air
conditioner, etc.)
• Calculate the bill B1 based on that initial load profile and the rate that the customer is on – this
is what the homeowner is already paying to the electric company
• Calculate the load profile added by the EV – based on how much energy it needs, and when it is
charged. Usually, an EV consumes about 0.3 kWh per mile driven.
• Add up the home load profile and the EV load profile
• Calculate the bill B2 based on the combined load profile (potentially with a different rate)
• The bill impact is B2 – B1.
### Skill Test
Your task is to build a simple React-based app that helps the user choose which rate to pick, from 2
options:
• Rate A is a flat $0.15/kWh
• Rate B is a TOU rate of $0.20/kWh between noon and 6pm, and $0.08/kWh otherwise
#### Please request the following inputs from the user:
• Which rate they are currently on
• How many miles the user will driver per year
• What hours of the day they plan to charge
#### And display the following outputs:
• Bill impact of charging an EV under each rate
• Whether or not the user should switch rates (from A to B or from B to A, depending on their input) or whether they are already on the cheapest rate.

Please use this load profile (the “Electricity:Facility [kWh](Hourly)” column) as their current home load profile (pre-EV).
For your reference, a similar (more complex) tool is deployed [here](https://ev.pge.com/rates/).

Please deploy your React app to a publicly accessible host (e.g. Heroku) for us to test, and please provide the source code (e.g. in GitHub).

### Evaluation Criteria
#### Basic criteria:
• App is functional
• Calculations are correct
• Code is clear and easy to follow
#### Bonus points:
• Creative UI
• Scalable organization of calculations (what if we added another rate?)
• Small commits
• Documentation
• Anything else going above and beyond the requirements

#### GOOD LUCK!