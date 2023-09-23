<script>
    import {
        Sidebar,
        SidebarGroup,
        SidebarItem,
        SidebarWrapper,
        SidebarDropdownItem,
        SidebarDropdownWrapper,
    } from 'flowbite-svelte';
    import { ChartPieSolid, GridSolid, ShoppingCartSolid, MailBoxSolid, UserSolid, ArrowRightToBracketSolid, FileEditSolid } from 'flowbite-svelte-icons';
    import Footer from "../Footer.svelte";
    let spanClass = 'flex-1 ml-3 whitespace-nowrap';
</script>
<div class="z-40">
<Sidebar class="fixed bg-white dark:bg-black border-r-2 border-gray-100 lg:block hidden">
    <SidebarWrapper class="bg-white dark:bg-black">
        <SidebarGroup class="py-20 h-screen ">
            <!-- <SidebarItem label="Dashboard">
                <svelte:fragment slot="icon">
                    <ChartPieSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                </svelte:fragment>
            </SidebarItem> -->
            <SidebarDropdownWrapper label="Branch">
                <svelte:fragment slot="icon">
                    <ShoppingCartSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                </svelte:fragment>
                <SidebarDropdownItem href="/Dashboard/Branch/CSE" label="CSE"/>

                <SidebarDropdownItem href="/Dashboard/Branch/IT" label="IT" />
                <SidebarDropdownItem href="/Dashboard/Branch/AIML" label="AIML" />
                <SidebarDropdownItem href="/Dashboard/Branch/AIDS" label="AIDS" />
                <SidebarDropdownItem href="/Dashboard/Branch/ECE" label="ECE" />
            </SidebarDropdownWrapper>
            <SidebarDropdownWrapper label="Skills">
                <svelte:fragment slot="icon">
                    <ShoppingCartSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                </svelte:fragment>
                <SidebarDropdownItem label="App Dev" />
                <SidebarDropdownItem label="Web Dev" />
                <SidebarDropdownItem label="Cyber Security" />
                <SidebarDropdownItem label="DSA" />
            </SidebarDropdownWrapper>
            <!-- <SidebarItem label="Inbox" {spanClass}>
                <svelte:fragment slot="icon">
                    <MailBoxSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                </svelte:fragment>
                <svelte:fragment slot="subtext">
                    <span class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-primary-600 bg-primary-200 rounded-full dark:bg-primary-900 dark:text-primary-200"> 3 </span>
                </svelte:fragment>
            </SidebarItem> -->
            <!-- <SidebarItem label="Users">
                <svelte:fragment slot="icon">
                    <UserSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                </svelte:fragment>
            </SidebarItem> -->
            <form action="/logout" method="POST">
            <SidebarItem label="Logout" >
                <svelte:fragment slot="icon">
                    <ArrowRightToBracketSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                </svelte:fragment>
            </SidebarItem>
            </form>

        </SidebarGroup>
    </SidebarWrapper>
</Sidebar>
</div>
<div>
    <slot />
</div>
<div class="z-30">
    <Footer/>
</div>

