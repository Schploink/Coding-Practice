var reverseList = function(head) {
    if (head === null) return head
    let prevNode = null
    let nextNode = head.next
    
    while (head) {
        let nextNode = head.next
        head.next = prevNode
        prevNode = head
        head = nextNode
    }
    
    return 
};