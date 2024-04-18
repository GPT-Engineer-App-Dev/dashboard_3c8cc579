import { Box, Flex, Text, Heading, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Divider, Image, Icon } from "@chakra-ui/react";
import { FaUser, FaDollarSign, FaChartLine, FaChartPie, FaChartBar, FaShoppingCart } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={8}>
        Business Dashboard
      </Heading>

      <Flex wrap="wrap" mb={8}>
        <Box w={["100%", "50%", "25%"]} p={4}>
          <Stat>
            <StatLabel>Total Users</StatLabel>
            <StatNumber>1,200</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              12%
            </StatHelpText>
          </Stat>
          <Icon as={FaUser} w={8} h={8} color="blue.500" />
        </Box>

        <Box w={["100%", "50%", "25%"]} p={4}>
          <Stat>
            <StatLabel>Revenue</StatLabel>
            <StatNumber>$42,000</StatNumber>
            <StatHelpText>
              <StatArrow type="decrease" />
              8%
            </StatHelpText>
          </Stat>
          <Icon as={FaDollarSign} w={8} h={8} color="green.500" />
        </Box>

        <Box w={["100%", "50%", "25%"]} p={4}>
          <Stat>
            <StatLabel>Orders</StatLabel>
            <StatNumber>780</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              20%
            </StatHelpText>
          </Stat>
          <Icon as={FaShoppingCart} w={8} h={8} color="orange.500" />
        </Box>

        <Box w={["100%", "50%", "25%"]} p={4}>
          <Stat>
            <StatLabel>Conversion Rate</StatLabel>
            <StatNumber>2.5%</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              0.5%
            </StatHelpText>
          </Stat>
          <Icon as={FaChartLine} w={8} h={8} color="red.500" />
        </Box>
      </Flex>

      <Divider my={8} />

      <Flex wrap="wrap">
        <Box w={["100%", "50%"]} p={4}>
          <Heading size="lg" mb={4}>
            Sales by Category
          </Heading>
          <Image src="https://placehold.co/600x400" alt="Pie Chart" />
          <Icon as={FaChartPie} w={8} h={8} color="purple.500" />
        </Box>

        <Box w={["100%", "50%"]} p={4}>
          <Heading size="lg" mb={4}>
            Revenue Trend
          </Heading>
          <Image src="https://images.unsplash.com/photo-1543286386-713bdd548da4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsaW5lJTIwY2hhcnR8ZW58MHx8fHwxNzEzNDU5OTE4fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Line Chart" />
          <Icon as={FaChartLine} w={8} h={8} color="teal.500" />
        </Box>
      </Flex>
    </Box>
  );
};

export default Index;
