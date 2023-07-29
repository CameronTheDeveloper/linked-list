const linkedList = () => {

    return {
        head: null,
        tail: null,
        size: 0,
        append(value) {
            const newNode = node(value);
            if (this.size < 1) {
                this.head = newNode;
                this.tail = newNode;
            } else {
                this.tail.next = newNode;
                this.tail = newNode;
                newNode.next = null;
            }
            this.size++;
        },
        prepend(value) {
            const newHead = node(value);
            newHead.next = this.head;
            this.head = newHead;
            this.size++;
        },
        pop() {
            this.tail = null;
            let newTail = this.head;
            while (newTail.next.next) {
                newTail = newTail.next;
            }
            this.tail = newTail;
            this.tail.next = null;
            this.size--;
        },
        getHead() {
            return this.head.value;
        },
        getTail() {
            return this.tail.value;
        },
        getSize() {
            return this.size;
        },
        atIndex(index) {
            let current = this.head;
            let count = 0;
            while (current.next && count < index) {
                if (!current.next) {
                    return null;
                }
                current = current.next;
                count++;
            }
            return current.value;
        },
        contains(value) {
            let current = this.head;
            while (current) {
                if (current.value === value) {
                    return true;
                }
                current = current.next;
            }
            return false;
        },
        find(value) {
            let current = this.head;
            let index = 0;
            while (current) {
                if (current.value === value) {
                    return index;
                }
                index++;
                current = current.next;
            }
            return null;
        },
        listToString() {
            let current = this.head;
            let listAr = [];
            while (current) {
                let value = current.value.toString();
                listAr.push(value);
                current = current.next;
            }
            return listAr;
        },
    };
};

const node = (value = null) => {
    return {
        value: value,
        next: null,
    };
};

const createList = () => {
    const list = linkedList();
    return list;
};

const initList = () => {
    const list = createList();
    list.append(5);
    list.append(4);
    list.append(9);
    list.append(155);
    list.append(72);
    list.prepend(87);
    list.pop();
    console.log('Head: ', list.getHead());  // 87
    console.log('Tail: ', list.getTail());  // 155
    console.log('Size: ', list.getSize());  // 5
    console.log('The value at index 2 is: ', list.atIndex(2));  // 4
    console.log('Contains 5: ', list.contains(5));    // true
    console.log('Contains 7: ', list.contains(7));    // false
    console.log('number 5 is in index of: ', list.find(5));   // 1
    console.log('number 4 is in index of: ', list.find(4));   // 2
    console.log('number 11 is in index of: ', list.find(11)); // null
    console.log('Full List: ', list.listToString());     // 87 5 4 9 155
};

initList();