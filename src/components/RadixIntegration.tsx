'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Zap,
  Shield,
  Globe,
  Code,
  ArrowRight,
  ExternalLink,
  Atom,
  Layers,
  Cpu,
  Database
} from 'lucide-react';

const RadixIntegration = () => {
  const radixFeatures = [
    {
      icon: Atom,
      title: 'Cerberus Consensus',
      description: 'The world&apos;s first linear scalable consensus algorithm enabling unlimited throughput for DeFi.',
      benefit: 'Unlimited scalability'
    },
    {
      icon: Zap,
      title: 'Scrypto Smart Contracts',
      description: 'Asset-oriented programming with native multi-asset support and built-in security guarantees.',
      benefit: 'Native DeFi features'
    },
    {
      icon: Shield,
      title: 'Asset-Oriented Design',
      description: 'Assets are first-class objects with built-in access controls and ownership management.',
      benefit: 'Enhanced security'
    },
    {
      icon: Code,
      title: 'Finite State Machines',
      description: 'Predictable smart contract behavior with formal verification and deterministic execution.',
      benefit: 'Predictable outcomes'
    },
    {
      icon: Layers,
      title: 'Native Multi-Asset',
      description: 'Handle multiple tokens, NFTs, and complex assets without ERC-20 wrapper complexity.',
      benefit: 'Simplified development'
    },
    {
      icon: Cpu,
      title: 'Radix Engine',
      description: 'Purpose-built execution environment optimized for DeFi with predictable fees.',
      benefit: 'Low, stable costs'
    }
  ];

  const technicalSpecs = [
    { label: 'Consensus Algorithm', value: 'Cerberus', icon: Zap },
    { label: 'Smart Contracts', value: 'Scrypto', icon: Globe },
    { label: 'Transaction Finality', value: '~5 seconds', icon: Database },
    { label: 'Network Efficiency', value: '99.9% less energy', icon: Atom }
  ];

  return (
    <section id="radix" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mr-4">
              <Atom className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold">
              Built on <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Radix DLT</span>
            </h2>
          </div>

          {/* RunOnRadix Logo - Integrated into header */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-6"
          >
          </motion.div>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Weft Finance V2 is built natively on Radix DLT with Scrypto smart contracts,
            leveraging Cerberus consensus and the world&apos;s first DeFi-optimized layer-1 protocol.
          </p>
        </motion.div>

        {/* Weft Node Validator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="weft-card p-8 rounded-3xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl mb-4">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Stake XRD with <span className="text-green-400">Weft Validator</span>
              </h3>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-6">
                Support the Radix network and earn rewards by staking your XRD tokens with the official Weft Finance validator node.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 mb-2">Secure</div>
                <div className="text-sm text-gray-400">Enterprise-grade infrastructure</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 mb-2">Reliable</div>
                <div className="text-sm text-gray-400">High uptime & performance</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 mb-2">Rewarding</div>
                <div className="text-sm text-gray-400">Competitive staking rewards</div>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="https://dashboard.radixdlt.com/network-staking/validator_rdx1sd6n65sx0thvfzfp6x0jp4qgwxtudpx575wpwqespdlva2wldul9xk/stake"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl text-white font-semibold hover:from-green-500 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
              >
                <span>Stake XRD Now</span>
                <ExternalLink className="w-5 h-5" />
              </Link>
              <p className="text-xs text-gray-500 mt-3">
                Validator ID: rdx1sd6n65sx0thvfzfp6x0jp4qgwxtudpx575wpwqespdlva2wldul9xk
              </p>
            </div>
          </div>
        </motion.div>

        {/* Radix Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {radixFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="weft-card p-6 group hover:border-cyan-500/30 transition-colors"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {feature.description}
              </p>
              <div className="text-cyan-400 font-semibold text-sm">
                ✓ {feature.benefit}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center mb-16"
        >
          <div>
            <h3 className="text-3xl font-bold mb-6">
              Next-Generation <span className="text-cyan-400">Technology</span>
            </h3>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Radix DLT represents a fundamental breakthrough in blockchain technology,
              designed from the ground up to solve the limitations of traditional blockchains
              for decentralized finance applications.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Cerberus Consensus</h4>
                  <p className="text-gray-400 text-sm">Pre-sharded, Byzantine fault-tolerant consensus for unlimited scalability</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Code className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Scrypto Language</h4>
                  <p className="text-gray-400 text-sm">Asset-oriented programming language designed for DeFi</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Globe className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Radix Engine</h4>
                  <p className="text-gray-400 text-sm">Specialized virtual machine optimized for DeFi applications</p>
                </div>
              </div>
            </div>

            <Link
              href="https://www.radixdlt.com/full-stack"
              target="_blank"
              rel="noopener noreferrer"
              className="weft-btn-primary flex items-center space-x-2 w-fit"
            >
              <span>Learn More About Radix</span>
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-3xl"></div>
            <div className="relative weft-card p-8 rounded-3xl">
              <h4 className="text-xl font-bold mb-6 text-center">Technical Performance</h4>
              <div className="grid grid-cols-2 gap-6">
                {technicalSpecs.map((spec, index) => (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-cyan-500/20 rounded-full mb-3">
                      <spec.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div className="text-xl font-bold text-white mb-1">{spec.value}</div>
                    <div className="text-sm text-gray-400">{spec.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg border border-cyan-500/20">
                <div className="text-center">
                  <div className="text-lg font-bold text-cyan-400 mb-2">Carbon Neutral</div>
                  <div className="text-sm text-gray-400">Environmentally sustainable blockchain</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Network Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="weft-card p-8 rounded-3xl mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Radix Network <span className="text-cyan-400">Architecture</span>
          </h3>
          <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="grid grid-cols-3 gap-8 mb-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Layers className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-sm text-gray-400">Application Layer</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Cpu className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-sm text-gray-400">Radix Engine</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Database className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-sm text-gray-400">Consensus Layer</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                * Network architecture visualization - Will be replaced with interactive diagram
              </p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="weft-card p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Experience <span className="text-cyan-400">Radix-Powered</span> DeFi
            </h3>
            <p className="text-gray-300 mb-6 text-lg">
              Join the future of decentralized finance with enterprise-grade security,
              unlimited scalability, and intuitive user experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <Link
                href="https://app.weft.finance/market"
                target="_blank"
                rel="noopener noreferrer"
                className="weft-btn-primary flex items-center justify-center space-x-2 w-full sm:w-auto min-w-0 sm:min-w-[160px]"
              >
                <span>Launch on Radix</span>
                <ArrowRight className="w-4 h-4 flex-shrink-0" />
              </Link>
              <Link
                href="https://www.radixdlt.com/full-stack"
                target="_blank"
                rel="noopener noreferrer"
                className="weft-btn-secondary flex items-center justify-center space-x-2 w-full sm:w-auto min-w-0 sm:min-w-[160px]"
              >
                <span>Explore Radix</span>
                <ExternalLink className="w-4 h-4 flex-shrink-0" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RadixIntegration;
