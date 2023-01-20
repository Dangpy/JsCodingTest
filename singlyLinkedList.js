/** @format */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  // 생성자부분 => 노드 끼리 엮어주기만함

  find(value) {
    let currNode = this.head;
    while (currNode.value !== value) {
      currNode = currNode.next;
    }
    return currNode;
  } // while 루프를 돌리며 값을 찾을 때까지 계속 다음 요소로 넘어감
  // 만약 값을 찾으면 해당 루프는 종료 되고 값을 반환한다.

  append(newValue) {
    // 1. 받은 값을 그대로 사용하여 node를 생성해준다
    const newNode = new Node(newValue);
    // 2. 그 후 head 가 비어 있다면 연결리스트에 아무런 값이 없다는 것이기에 head와 tail포인터에 생성된 node를 가리키게 만든다.
    // 2. 만약 head가 null이 아니라면 값이 있기 때문에 tail의 포인터가 새로 생성된 node를 가리키도록 한다.
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  } // 추가 로직 끝에 추가 하는 append 로직과 중간 추가 insert 로직이 있음

  insert(node, newValue) {
    // 파라미터 다음에 받음 node로 끼워넣을 것임
    const newNode = new Node(newValue);
    // 생성 받은 node를 입력 받은 node 다음을 가리키도록 만든다.
    newNode.next = node.next;
    // 입력 받은 node 다음을 새로 생성된 node를 가리키도록 만들면 생성된 node가 중간에 넣어짐
    node.next = newNode;
  }

  // 값 삭제하기 : 탐색 후 삭제하도록 만듦 => 선형시간이 소요됨.
  // 삭제가 상수 시간이 소요되도록 하고 싶다면 삭제할 node에 이전 node를 입력값으로 넣어주면 됨
  remove(value) {
    // 루프 돌면서 이전 node 찾기
    let prevNode = this.head;
    while (prevNode.next.value !== value) {
      prevNode = prevNode.next;
    }
    // 이전 node에 다음을 다음 다음 node를 가리키도록 수정한다.
    //그러면 중간 노드가 아무런 노드와 연결되지 않기 때문에 자연스럽게 삭제된다.
    if (prevNode.next !== null) {
      prevNode.next = prevNode.next.next;
    }
  }

  display() {
    let currNode = this.head;
    let displayString = "[";
    while (currNode !== null) {
      displayString += `${currNode.value},`;
      currNode = currNode.next;
    }
    displayString = displayString.substring(0, displayString.length - 2);
    displayString += "]";
    console.log(displayString);
  }
}

const linkedList = new SinglyLinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(5);
linkedList.display();
console.log(linkedList.find(3));
linkedList.remove(3);
linkedList.display();
linkedList.insert(linkedList.find(2), 10);
linkedList.display();

// output
// [1,2,3,]
// Node {value: 3, next: Node}
// [1,2,]
// [1,2,10,]
