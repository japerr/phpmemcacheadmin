    <div class="serverlist rounded" style="padding: 3px 7px 3px 7px; width: 772px;">Actually seeing
        <select class="serverlist menu" onchange="changeServer(this)">
        <option value="" <?php if(!isset($_GET['server']) || ($_GET['server'] == '')) { echo 'selected="selected"'; } ?>>All Servers</option>
<?php
# Servers
foreach($_ini['server'] as $server => $port)
{ ?>
        <option value="<?php echo $server; ?>" <?php if((isset($_GET['server'])) && ($_GET['server'] == $server)) { echo 'selected="selected"'; } ?>>
            <?php echo $server; ?>
        </option>
<?php
} ?>
        </select>
        | <a href="commands.php">Execute Commands on Servers</a> | <a href="configure.php">Edit Configuration</a>
    </div>