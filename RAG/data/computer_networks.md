# Computer Networks Questions

1. What is the OSI model?
   The OSI model is a conceptual framework with seven layers: Physical, Data Link, Network, Transport, Session, Presentation, and Application. It helps explain how data moves across a network and how responsibilities are divided between protocols and devices.

2. What is the difference between TCP and UDP?
   TCP is connection-oriented, reliable, and guarantees ordered delivery with error recovery and flow control. UDP is connectionless, faster, and has lower overhead but does not guarantee delivery or ordering. TCP is used for web pages and file transfer, while UDP is common in streaming and gaming.

3. What is an IP address?
   An IP address is a logical identifier assigned to a device on a network so it can send and receive packets. IPv4 uses 32 bits, while IPv6 uses 128 bits and supports a much larger address space. Routers use IP addresses to forward packets between networks.

4. What is the difference between a hub, switch, and router?
   A hub broadcasts incoming data to all connected devices without filtering. A switch forwards frames intelligently within a local network using MAC addresses. A router connects different networks and forwards packets using IP addresses.

5. What is DNS?
   DNS, or Domain Name System, translates human-readable domain names like `example.com` into IP addresses. It acts like the internet's phonebook. Without DNS, users would need to remember numerical IP addresses for every service.

6. What is the purpose of the subnet mask?
   A subnet mask separates the network portion of an IP address from the host portion. It helps devices determine whether a destination is on the same subnet or must be reached through a router. Subnetting also improves address management and network organization.

7. What is HTTP and HTTPS?
   HTTP is an application-layer protocol used to transfer web content between clients and servers. HTTPS is HTTP secured with TLS encryption, which provides confidentiality, integrity, and server authentication. Modern websites use HTTPS to protect user data.

8. What is ARP?
   ARP, or Address Resolution Protocol, maps an IPv4 address to a MAC address within a local network. When a host wants to send a frame to another device on the same LAN, it uses ARP to discover the destination's hardware address.

9. What is packet switching?
   Packet switching breaks data into smaller packets that can travel independently across the network and be reassembled at the destination. It improves efficiency because network links can be shared among many users. The internet is based on packet switching.

10. What is latency, bandwidth, and throughput?
    Latency is the time it takes for data to travel from source to destination. Bandwidth is the theoretical maximum capacity of a link. Throughput is the actual amount of data successfully transferred over time, which is often lower than bandwidth because of overhead and congestion.

11. What is NAT?
    NAT, or Network Address Translation, lets multiple private devices share a single public IP address. A router rewrites address information as packets move between private and public networks. This conserves IPv4 addresses and adds a layer of isolation.

12. What is a firewall?
    A firewall is a security mechanism that monitors and filters incoming and outgoing network traffic based on rules. It can block unauthorized access, restrict services, and help protect systems from attacks. Firewalls may be hardware-based, software-based, or both.
