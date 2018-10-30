function makeTicket(){
  this.index= [];
  }

  makeTicket.prototype.totalTicket = function(index){
    var total = 0;
    for(var i=0; i < index.length; i++){
    total += index[i];
    }
    return total;
  }

function Ticket(movieName, showTime, age){
  this.movieName = movieName,
  this.showTime = showTime,
  this.age = age
}

Ticket.prototype.ageValidation = function(age){
  if(this.age) >= 65{
    this.index[0].push(0);
  }
  this.index[0].push(2);
}

Ticket.prototype.getShowTime = function(showTime) {
  if (this.showTime  === 1 || this.showTime === 2) {
    this.index[1].push(6);
  }
  this.index[1].push(10);
}

Ticket.prototype.releaseValidation = function(movieName){
  if(this.movieName === 1 || this.movieName === 2){
    this.index[2].push(0);
  }
  this.index[2].push(2);
}

$(document).ready(function(){
  $("#formid").submit(event){
    event.preventDefault();
    var inputtedMovieName =
  });
});
