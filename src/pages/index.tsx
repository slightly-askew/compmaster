import { NextPage } from 'next'
import { motion } from 'framer-motion'

const Index: NextPage<{}> = () => (
  <motion.div exit={{ opacity: 0 }}></motion.div>
)

export default Index
