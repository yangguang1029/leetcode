var reverseBetween = function(head, left, right) {
    const tmphead = new ListNode()
    tmphead.next = head;
    let p = tmphead;
    let i = 1;
    while(i < left) {
        p = p.next;
        i+=1
    }
    // p 的下一个就是被换的起点
    let first = p.next
    let second = first.next;
    i = 0;
    let tmpnode;
    while(left + i < right) {
        tmpnode = second.next;
        second.next = first
        first = second;
        second = tmpnode 
        i+=1
    }
    let haha = p.next;
    haha.next = second;
    p.next = first;
    return tmphead.next;
};

const head = createList([3,5])
reverseBetween(head, 1,2)