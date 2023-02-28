/* 
When visitors come to the amusement park for the first time, 
they need to register by entering their name and age in a terminal and agreeing 
to the terms and conditions. Of course, they also need to buy a ticket. 
Each ticket has an identifier like H32AZ123.

Write a function createVisitor that accepts three arguments.

The name of the visitor.
The age of the visitor.
The identifier of the ticket that the visitor bought.
The function should return an object that holds this information. 
The keys in the object should be called name, age and ticketId.

*/

function createVisitor(name, age, ticketId) {
  return {
    name: name,
    age: age,
  ticketId: ticketId
  }
}

/* 
When people leave the amusement park, their ticket gets revoked. 
If they come back, they need to buy a new one. To save regular visitors some time, 
they only need to register once and the visitor information will be kept for subsequent visits.

That means when a visitor leaves the park,
only their ticket should be invalidated but the rest of the visitor 
object should stay the same. Implement the function revokeTicket that accepts a visitor object, 
sets the ticket identifier to null and returns the object afterwards.
*/

function revokeTicket(visitor) {
  let newVisitor = visitor
  if(visitor?.ticketId) {
    newVisitor.ticketId = null
  }
  return newVisitor
}

/* 
To prevent forgery, the ticket identifiers are unique. 
Once a ticket is printed, its identifier is added as a key in an object in the system so it can be tracked.

Before the ticket is sold to a visitor, 
it is stored with the value null in the ticket tracking object. 
When it is sold to a visitor, the visitor's name is assigned as a value. 
When employees have doubts about the validity of a ticket, 
they need to check the status of the ticket in the system.

Implement a function ticketStatus that accepts the tracking object 
and a ticket identifier as arguments. It should return one of the following results.

'unknown ticket id' if the identifier was not found in the tracking object
'not sold' in case the ticket was printed but not sold
'sold to {name}' where {name} is the name of the visitor if the ticket was sold
*/

function ticketStatus(tickets, ticketId) {
  if (!tickets.hasOwnProperty(ticketId)) {
    return 'unknown ticket id';
  } else if (tickets[ticketId] === null) {
    return 'not sold';
  } else {
    return `sold to ${tickets[ticketId]}`;
  }
}

/* 
After a while, you get feedback from the employees that they want 
the ticket status to be easier to understand at the first glance. 
They only want to see either the name of the visitor or that the ticket is invalid.

Write a function simpleTicketStatus that accepts the same arguments 
as ticketStatus in task 3. This function only returns one of two different results.

the name of the visitor if the ticket was sold
'invalid ticket !!!' if the ticket was not sold yet or the identifier was not found in the tracking object
*/

function simpleTicketStatus(tickets, ticketId) {
  if(!tickets.hasOwnProperty(ticketId) || tickets[ticketId] === null) {
    return "invalid ticket !!!"
  }
  else {
    return tickets[ticketId]
  }
}

/* 
Due to new legal requirements, newly created visitor objects now also contain detailed
information on the "General Terms & Conditions" (GTC) that the user agreed to. 
You can see an example of the new visitor object below.

The cashiers of the amusement park now need to check whether a visitor 
needs to sign a new version of the GTC. For this, implement a function gtcVersion 
that accepts a visitor object as an argument and returns the GTC version if it is available. 
If the version information is not available, nothing should be returned.
*/

function gtcVersion(visitor) {
  if (visitor.hasOwnProperty('gtc')) {
    return visitor.gtc.version
  }
}
