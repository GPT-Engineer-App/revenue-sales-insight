import React from "react";
import { Box, Flex, Heading, Text, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Image, SimpleGrid } from "@chakra-ui/react";
import { FaChartLine, FaChartPie, FaChartBar, FaUsers } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={8}>
        Business Dashboard
      </Heading>

      <SimpleGrid columns={[1, null, 2]} spacing={8} mb={12}>
        <Stat>
          <StatLabel>Total Sales</StatLabel>
          <StatNumber>$350,897</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            23.36%
          </StatHelpText>
        </Stat>

        <Stat>
          <StatLabel>Revenue</StatLabel>
          <StatNumber>$45,670</StatNumber>
          <StatHelpText>
            <StatArrow type="decrease" />
            9.05%
          </StatHelpText>
        </Stat>
      </SimpleGrid>

      <SimpleGrid columns={[1, null, 3]} spacing={8} mb={12}>
        <Box bg="white" borderRadius="md" p={6} boxShadow="md">
          <Flex align="center" mb={4}>
            <Box as={FaChartLine} color="blue.500" size="3em" mr={4} />
            <Text fontWeight="bold">Sales Trend</Text>
          </Flex>
          <Image src="https://images.unsplash.com/photo-1639389016237-85a1a16f76d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsaW5lJTIwY2hhcnQlMjBzaG93aW5nJTIwaW5jcmVhc2luZyUyMHNhbGVzJTIwdHJlbmR8ZW58MHx8fHwxNzExMTc5NjY3fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Sales trend" />
        </Box>

        <Box bg="white" borderRadius="md" p={6} boxShadow="md">
          <Flex align="center" mb={4}>
            <Box as={FaChartPie} color="green.500" size="3em" mr={4} />
            <Text fontWeight="bold">Revenue Breakdown</Text>
          </Flex>
          <Image src="https://images.unsplash.com/photo-1601000938259-9e92002320b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwaWUlMjBjaGFydCUyMHNob3dpbmclMjByZXZlbnVlJTIwYnJlYWtkb3duJTIwYnklMjBjYXRlZ29yeXxlbnwwfHx8fDE3MTExNzk2Njh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Revenue breakdown" />
        </Box>

        <Box bg="white" borderRadius="md" p={6} boxShadow="md">
          <Flex align="center" mb={4}>
            <Box as={FaChartBar} color="orange.500" size="3em" mr={4} />
            <Text fontWeight="bold">Product Performance</Text>
          </Flex>
          <Image src="https://images.unsplash.com/photo-1523567830207-96731740fa71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiYXIlMjBjaGFydCUyMGNvbXBhcmluZyUyMHNhbGVzJTIwcGVyZm9ybWFuY2UlMjBvZiUyMGRpZmZlcmVudCUyMHByb2R1Y3RzfGVufDB8fHx8MTcxMTE3OTY2OHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Product performance" />
        </Box>
      </SimpleGrid>

      <Box bg="white" borderRadius="md" p={6} boxShadow="md">
        <Flex align="center" mb={4}>
          <Box as={FaUsers} color="teal.500" size="3em" mr={4} />
          <Text fontWeight="bold">Customer Metrics</Text>
        </Flex>
        <SimpleGrid columns={3} spacing={8}>
          <Box>
            <Heading size="md">1,254</Heading>
            <Text>Total Customers</Text>
          </Box>
          <Box>
            <Heading size="md">76%</Heading>
            <Text>Retention Rate</Text>
          </Box>
          <Box>
            <Heading size="md">4.8</Heading>
            <Text>Avg. Rating</Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Index;
