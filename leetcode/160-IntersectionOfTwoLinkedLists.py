# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> ListNode:
        pA, pB = headA, headB
        aRedirected, bRedirected = False, False

        while pA != None and pB != None:
            if pA is pB:
                return pA

            if pA.next == None and aRedirected == False:
                pA = headB
                aRedirected = True
            else:
                pA = pA.next

            if pB.next == None and bRedirected == False:
                pB = headA
                bRedirected = False
            else:
                pB = pB.next

        return None
