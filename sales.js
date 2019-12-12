var days = [];


days.push (Number(window.prompt("Enter total sales for Monday.")));
days.push (Number(window.prompt("Enter total sales for Tuesday.")));
days.push (Number(window.prompt("Enter total sales for Wednesday.")));
days.push (Number(window.prompt("Enter total sales for Thursday.")));
days.push (Number(window.prompt("Enter total sales for Friday.")));
days.push (Number(window.prompt("Enter total sales for Saturday.")));
days.push (Number(window.prompt("Enter total sales for Sunday.")));

var total = 0;

for (i = 0; i < days.length; i++) {
    total = total + days[i];
}

document.write("Sales for this week amounts to " + total);
