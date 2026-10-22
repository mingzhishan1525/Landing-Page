import { test } from 'node:test';
import assert from 'node:assert/strict';
import { simulate } from '../app/blog/inbound-inventory-reorder-timeline/timeline';
const base={stock:300,demand:10,quantity:150,receiptDay:10,delay:0,days:45,backorders:false};
test('on-time, five-day delay and lost-sale late receipt match published examples',()=>{
 assert.equal(simulate(base)[9].closing,350);
 const five=simulate({...base,delay:5}); assert.deepEqual(five.slice(13,16).map(r=>r.closing),[160,300,290]);
 const late=simulate({...base,delay:21}); assert.equal(late.find(r=>r.unfilled>0)?.day,31); assert.equal(late[31].closing,140);
});
test('backorders ship once, only when stock is available',()=>{
 const r=simulate({...base,delay:21,backorders:true}); assert.equal(r[30].closing,150); assert.equal(r[30].backlog,10); assert.equal(r[30].available,140); assert.equal(r[31].closing,130); assert.equal(r[31].backlog,0);
 for(const row of r) {assert.equal(row.closing,row.opening-row.backlogFilled-row.filled+row.receipt);assert.equal(row.backlog,row.openingBacklog-row.backlogFilled+row.unfilled);assert.ok(row.closing>=0);}
});
test('zero demand, empty stock, day-end receipt and receipt beyond horizon',()=>{
 assert.ok(simulate({...base,demand:0}).every(r=>r.unfilled===0));
 const r=simulate({...base,stock:0,receiptDay:1}); assert.equal(r[0].unfilled,10);assert.equal(r[1].filled,10);
 assert.ok(simulate({...base,receiptDay:365,days:30}).every(r=>r.receipt===0));
});
test('reject invalid and unbounded inputs',()=>{for(const n of [-1,NaN,Infinity,1.5,1000001]) assert.throws(()=>simulate({...base,stock:n})); assert.throws(()=>simulate({...base,days:0}));assert.throws(()=>simulate({...base,days:366}));});
